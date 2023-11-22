export default function Container({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="container mx-auto max-w-7xl p-6">{children}</div>
}
