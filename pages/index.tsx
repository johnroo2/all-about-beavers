import { useParallax } from "react-scroll-parallax";

export const PolyWave = () => {
  return(
      <div className="polywave-wrapper polywave-animation pointer-events-none">
          <div className="absolute z-0 w-full h-full bg-transparent"/>
          <div className="polywave-inner">
              <div className="bg-poly1 polywave polywave1"/>
          </div>
          <div className="polywave-inner">
              <div className="bg-poly2 polywave polywave2"/>
          </div>
          <div className="polywave-inner">
              <div className="bg-poly3 polywave polywave3"/>
          </div>
      </div>
  )
}

export default function Index() {
  const ptitle = useParallax<any>({
    scale: [2, 0.8],
    translateY: ["-200px", "0px"]
  }).ref

  const p1 = useParallax<any>({
    translateX: [-100, 100],
    easing: [0, 1, 1, 0],
  }).ref

  const p2 = useParallax<any>({
    translateX: [100, -100, [0, 1, 1, 0]],
    opacity: [2, 0]
  }).ref

  const p3 = useParallax<any>({
    translateX: [-100, 100],
    easing: [0, 1, 1, 0],
  }).ref

  const p4 = useParallax<any>({
    translateX: [100, -100],
    easing: [0, 1, 1, 0]
  }).ref

  const pbg = useParallax<any>({
    translateX: ["-150vw", "0vw"],
  }).ref

  return (
    <div className="relative background z-[0] max-w-[100vw] overflow-hidden">
      <div className="absolute top-0 left-0 z-[1] flex flex-row items-start justify-start h-full
      overflow-hidden">
        <div ref={pbg} className="relative circles-img h-full"/>
      </div>

      <main className="relative z-[1] pb-[10rem] flex flex-col text-sky-50">
        <div className="h-20 start"/>
        <div className="relative z-[20] h-[500px]">
          <h1 ref={ptitle} className="absolute text-7xl font-semibold w-full text-center mt-[300px] z-[100]">
            🪵🦫 All About Beavers 🦫🪵
          </h1>
          <PolyWave/>
        </div>
        <div className="h-[15rem] intermediate w-[500vw] mb-[5rem]"/>
        <div ref={p1} className="flex flex-col 
        shadow-xl items-center justify-center mb-[5rem] w-[100vw] gap-4 px-60">
          <div className="text-3xl font-black">
            About Beavers, Part 1 
          </div>
          <div className="text-lg">
          Beavers (genus Castor) are large, semiaquatic rodents of the Northern Hemisphere. There are two existing species: the North American beaver (Castor canadensis) and the Eurasian beaver (C. fiber). Beavers are the second-largest living rodents, after capybaras, weighing up to 50 kg (110 lb). They have stout bodies with large heads, long chisel-like incisors, brown or gray fur, hand-like front feet, webbed back feet, and tails that are flat and scaly. The two species differ in skull and tail shape and fur color. Beavers can be found in a number of freshwater habitats, such as rivers, streams, lakes and ponds. They are herbivorous, consuming tree bark, aquatic plants, grasses and sedges.
          </div>
          <div className="text-lg">
          Beavers build dams and lodges using tree branches, vegetation, rocks and mud; they chew down trees for building material. Dams restrict water flow, and lodges serve as shelters. Their infrastructure creates wetlands used by many other species, and because of their effect on other organisms in the ecosystem, beavers are considered a keystone species. Adult males and females live in monogamous pairs with their offspring. After their first year, the young help their parents repair dams and lodges; older siblings may also help raise newly-born offspring. Beavers hold territories and mark them using scent mounds made of mud, debris, and castoreum—a liquid substance excreted through the beaver&apos;s urethra-based castor sacs. Beavers can also recognize their kin by their anal gland secretions and are more likely to tolerate them as neighbors.
          </div>
        </div>
        <div ref={p2} className="flex flex-col 
        shadow-xl items-center justify-center mb-[5rem] w-[100vw]
        px-60 gap-4 text-indigo-50">
          <div className="text-3xl font-black">
          About Beavers, Part 2
          </div>
          <div className="text-lg">
          Historically, beavers have been hunted for their fur, meat, and castoreum. Castoreum has been used in medicine, perfume, and food flavoring; beaver pelts have been a major driver of the fur trade. Before protections began in the 19th and early 20th centuries, overhunting had nearly exterminated both species. Their populations have since rebounded, and they are listed as species of least concern by the IUCN Red List of mammals. In human culture, the beaver symbolizes industriousness, especially in connection with construction; it is the national animal of Canada.
          </div>
          <div className="text-lg">
          The English word beaver comes from the Old English word beofor or befor and is connected to the German word biber and the Dutch word bever. The ultimate origin of the word is an Indo-European root for &apos;brown&apos;. The genus name Castor has its origin in the Greek kastor and translates as &apos;beaver&apos;. The name beaver is the source for several names of places in Europe including Beverley, Bièvres, Biberbach, Biebrich, Bibra, Bibern, Bibrka, Bobr, Bjurbäcker, Bjurfors, Bober, Bóbrka and Bjurlund.
          </div>
        </div>
        <div ref={p3} className="flex flex-col shadow-xl items-center justify-center mb-[5rem] w-[100vw] gap-4">
          <span className="text-4xl text-center font-semibold">Beavers: Image Gallery</span>
          <div className="flex flex-row gap-4 p-8 rounded-md bg-white  max-w-[70%] overflow-x-scroll">
            <img src="/beaver1.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver2.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver3.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver1.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver2.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver3.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver1.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver2.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver3.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver1.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver2.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver3.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver1.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver2.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver3.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver1.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver2.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver3.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver1.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver2.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver3.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver1.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver2.jpeg" className="w-[200px] h-auto"/>
            <img src="/beaver3.jpeg" className="w-[200px] h-auto"/>
          </div>
        </div>
        <div ref={p4} className="flex flex-col shadow-xl items-center justify-center mb-[5rem] w-[100vw] gap-4">
          <span className="text-4xl text-center font-semibold">Beaver Dams: Images</span>
          <div className="flex flex-row gap-4 p-8 rounded-md bg-white  max-w-[70%] overflow-x-scroll">
            <img src="/bdam1.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam2.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam3.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam1.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam2.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam3.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam1.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam2.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam3.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam1.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam2.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam3.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam1.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam2.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam3.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam1.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam2.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam3.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam1.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam2.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam3.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam1.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam2.jpeg" className="w-[200px] h-auto"/>
            <img src="/bdam3.jpeg" className="w-[200px] h-auto"/>
          </div>
        </div>
      </main>
    </div>
  )
}
