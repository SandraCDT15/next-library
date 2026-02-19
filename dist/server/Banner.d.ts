import * as react_jsx_runtime from 'react/jsx-runtime';

interface BannerProps {
    title: string;
    description: string;
    backgroundColor: string;
    children: React.ReactNode;
}
declare function Banner({ title, description, backgroundColor, children, }: BannerProps): react_jsx_runtime.JSX.Element;

export { Banner };
