import type { LinkProps as NextLinkProps } from "next/link";
import NextLink from "next/link";
import { useRouter } from "next/router";
import * as React from "react";

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      as,
      href,
      locale,
      prefetch,
      replace,
      scroll,
      shallow,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <NextLink
        as={as}
        href={href}
        locale={locale}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        <a ref={ref} {...props}>
          {children}
        </a>
      </NextLink>
    );
  }
);

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (
    {
      as,
      href,
      locale,
      prefetch,
      replace,
      scroll,
      shallow,
      children,
      ...props
    },
    ref
  ) => {
    const navLink = useNavLink({ as, href });

    return (
      <NextLink
        as={as}
        href={href}
        locale={locale}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        <a ref={ref} {...navLink.props} {...props}>
          {children}
        </a>
      </NextLink>
    );
  }
);

export function useNavLink({ href, as }: Partial<LinkProps>) {
  const router = useRouter();
  const active = router.asPath === href || router.asPath === as;
  return React.useMemo(
    () =>
      ({
        active,
        props: { "aria-current": active ? "page" : undefined },
      } as const),
    [active]
  );
}

export interface LinkProps
  extends Omit<NextLinkProps, "passHref">,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {}

export interface NavLinkProps extends LinkProps {}
