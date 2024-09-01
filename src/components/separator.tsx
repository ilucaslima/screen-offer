interface ISeparatorProps {
  title: string
}

export default function Separator({ title }: ISeparatorProps) {
  return (
    <main className="m-auto my-6 flex w-full max-w-[400px] items-center">
      <span className="h-0.5 w-full bg-black" />
      <p className="text-nowrap px-6 text-xs font-medium">{title}</p>
      <span className="h-0.5 w-full bg-black" />
    </main>
  )
}
