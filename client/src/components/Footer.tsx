export default function Footer() {
    return <footer className="p-7 flex flex-row justify-between items-center bg-gradient-to-b from-blue-500 to-blue-600 shadow-md ">
        <a href="/"><h1 className="font-medium">Jack Kraus</h1></a>
        <ul className="flex flex-row gap-3">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About</a></li>
        </ul>
    </footer>;
}