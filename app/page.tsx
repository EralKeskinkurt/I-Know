import SwiperComp from "../components/ui/Swiper"

export default function page() {
  return (
    <main className="w-full container mt-5">
      <header className="w-full flex items-start justify-start gap-10 py-5">
        <div className="w-full h-[70vh] bg-transparent overflow-hidden rounded-md relative">
          <SwiperComp />
        </div>
      </header>
    </main>
  )
}
