interface ErrorMsgProps {
    field: string;
    errors: Record<string, string>;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ field, errors }) => {
    if (!errors[field]) return null;
    return (
        <div className="d-flex align-items-center gap-1 text-danger small mt-1 bg-danger-subtle border border-danger-subtle rounded px-2 py-1">
            <span></span> {errors[field]}
        </div>
    )
}

export default ErrorMsg;