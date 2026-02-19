import * as react_jsx_runtime from 'react/jsx-runtime';

declare function Button({ action, title, active, }: {
    action: string;
    title: string;
    active: boolean;
}): react_jsx_runtime.JSX.Element;

interface BannerProps {
    title: string;
    description: string;
    backgroundColor: string;
    children: React.ReactNode;
}
declare function Banner({ title, description, backgroundColor, children, }: BannerProps): react_jsx_runtime.JSX.Element;

export { Banner, Button };
