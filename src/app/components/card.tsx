export default function Card({ title, description }: { title: string, description: string }) {
    return (
        <div className=" p-5 rounded-3xl bg-blue-900">
            <h3 className=" text-2xl font-semibold">{title}</h3>
            <p className=" text-sm font-light">{description}</p>
        </div>
    )
}