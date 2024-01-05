
import Hero from "../components/layout/Hero";
import HomeMenu from "../components/layout/HomeMenu";
import SectionHeaders from "../components/layout/SectionHeaders";


export default function Home() {
  return (
    <>
        <Hero />
        <HomeMenu />
        <section className="text-center my-16">
            <SectionHeaders
                subHeader={'Our story'}
                mainHeader={'About us'}
            />
            <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ad architecto cum debitis eos incidunt,
                    iste itaque magni natus nihil nisi nulla perferendis quaerat reiciendis reprehenderit sint sit sunt
                    tempora voluptate.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Beatae eaque eveniet facilis hic itaque magnam mollitia nihil pariatur placeat reprehenderit.
                    Atque commodi cum explicabo fugiat necessitatibus nemo nihil numquam quas.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        </section>
        <section className="text-center">
            <SectionHeaders subHeader={'Don\'t hesitate'}
                            mainHeader={'Contact us'}
            />
            <div className="mt-8">
                <a className="text-4xl underline text-gray-500" href="tel: 0722001001">
                    +254 722 001 001
                </a>
            </div>
        </section>

    </>
  )
}
