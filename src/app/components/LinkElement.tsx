import Link from 'next/link';

const LinkElement = (href: string, title: string, children: React.ReactNode, className: string = '') => <Link href={href} title={title} target='_blank' rel='noopener noreferrer' className={className}>{children}</Link>;

export default LinkElement;