export default function ProjectItem({data}) {
    return (
        <div className="p-6 m-3 bg-slate-400 rounded-md">
            <h1>{data.properties.Name.title[0].plain_text}</h1>
        </div>
    )
}