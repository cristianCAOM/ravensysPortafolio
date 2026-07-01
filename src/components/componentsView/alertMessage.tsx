import Alert from "@mui/material/Alert";

interface AlertMessageProps {
    message: string;
    severity?: "error" | "warning" | "info" | "success";
    }

    export default function AlertMessage({
    message,
    severity = "error",
    }: AlertMessageProps) {

    if (!message) return null;

    return (
        <Alert
        variant="filled"
        severity={severity}
        sx={{ mb: 2 }}
        >
        {message}
        </Alert>
    );
    }