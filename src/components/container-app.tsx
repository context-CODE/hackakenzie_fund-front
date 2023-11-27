export default function ContainerApp({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="container mx-auto max-w-7xl px-6">{children}</div>
}
