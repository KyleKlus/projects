/** @format */

import styles from './NavLink.module.css';
import Link from 'next/link';
import { useRouter } from 'next/compat/router';

interface INavLinkProps {
  className?: string;
  pathName: string;
  displayText: string;
}

/**
 * A link, which shows if it leads to the current page
 * @param props
 * @returns
 */

export default function NavLink(props: React.PropsWithChildren<INavLinkProps>) {
  const styleClass = '';

  return (
    <Link
      className={styles.navLink + ' ' + styleClass + ' ' + props.className}
      href={props.pathName}
    >
      {props.displayText}
    </Link>
  );
}
