export const Alert = (setAlert, color, text) => {
    setAlert({ open: true, color: color, text: text });
    setTimeout(() => {
        setAlert({ open: false, color: "", text: "" });
    }, 4000);
}