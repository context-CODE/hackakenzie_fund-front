export default function StoreLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="w-full h-s-m-header-desktop sm:h-s-m-header-mobile mt-m-m-header-desktop sm:mt-m-m-header-mobile bg-slate-600">
      {children}
    </div>
  )
}
