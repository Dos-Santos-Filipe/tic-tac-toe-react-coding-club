interface SquareProps {
    value: number;
}

export const Square = ({ value }: SquareProps) => {
    return <button className="square">{value}</button>
}