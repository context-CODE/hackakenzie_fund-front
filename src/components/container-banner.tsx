export default function ContainerBanner({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="py-6 flex flex-col gap-5">{children}</div>
}
