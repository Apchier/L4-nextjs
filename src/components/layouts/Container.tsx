import { SectionContainer } from "./SectionContainer"

type ContainerProps = {
    children: React.ReactNode
    className?: string
}

export const Container: React.FC<ContainerProps> = ({
    children,
    className
}) => {
    return (
        <SectionContainer className={`${className}`}>
            {children}
        </SectionContainer>
    )
}