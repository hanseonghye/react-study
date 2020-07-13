import React from 'react';


interface ButtonData {
    id: number;
    description: string;
}


interface ButtonListProps {
    children: React.ReactNode;
    data: ButtonData[];
    className: string;
}


const StyledButtonList = styled.div`
	display: flex;
	flex-direction: row;
`;


const ButtonList = ({ children, data = [], className} : ButtonListProps) => {
    const classCandidate = [className]
    const buttons = data.map(v => <Button key={v.id}>{v.description}</Button>)

    return (
        <StyledButtonList className={cn(classCandidate)}>
            {buttons}
            {children}
        </StyledButtonList>
    )
}


export default memo(ButtonList)