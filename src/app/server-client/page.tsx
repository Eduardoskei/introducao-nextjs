'Server component'

import ThemeToggle from "@/components/ThemeToggle";

export default function ServerClient() {
    const date = new Date().toLocaleDateString("pt-BR",{weekday: 'long'});

    const hour = new Date().getHours()
    const min = new Date().getMinutes()

    return (
        <div className="ServerDiv">
            <p>Server Time: {date} {hour}:{min}</p>
            <ThemeToggle/>
        </div>
    )
}