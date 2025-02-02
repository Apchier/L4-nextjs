type SectionContainerProps = {
    children: React.ReactNode
    className?: string
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
    children,
    className
}) => {
    return (
        <div className={`${className}`}>{children}</div>
    )
}