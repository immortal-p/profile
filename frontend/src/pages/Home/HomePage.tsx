import { motion } from "framer-motion"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import aboutPhoto from "@/assets/images/aboutInfoProfileSR.png"
import square from "@/assets/icons/square.svg"
import {
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle
} from "@/components/ui/item"
import { Button } from "@/components/ui/button";
import VericalLines from "@/components/ui/decor/VerticalLines";
import IconsInfo from "@/components/ui/decor/IconsInfo";

const BlurEffect = ({ position }: { position: string } ) => (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
            className={`absolute z-10 ${position}`}
        >
            <div className="w-100 h-100 rounded-full bg-(--icon-cl) opacity-20 blur-[100px]" />
        </motion.div>
)

const HomePage = () => {
    return (
        <main className="px-4 mx-auto container">
            <section className="mt-20 flex justify-between max-w-full min-w-full flex-wrap">
                <motion.div
                    initial={{ opacity:0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="max-w-1/2 z-20"
                >
                    <ItemContent className="mt-22">
                        <ItemTitle className="inline text-[34px] max-w-130 font-bold text-(--white-cl) [&>strong]:text-(--icon-cl)">Bargest is a <strong>web designer</strong> and <strong>front-end developer</strong></ItemTitle>
                        <ItemDescription className="mt-6 text-[16px] max-w-140 text-(--text-cl)">He crafts responsive websites where technologies meet creativity</ItemDescription>
                        <ItemActions className="mt-6">
                            <Button variant="outline" className="border-(--icon-cl) text-[16px] text-(--white-cl) transition duration-200 ease-in hover:text-(--white) hover:border-(--white) cursor-pointer">Contact Me !</Button>
                        </ItemActions>
                    </ItemContent>
                </motion.div>

                <motion.div
                    initial={{ opacity:0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="max-w-1/2 w-full z-20 flex justify-center relative"
                >
                    <Item className="flex justify-end p-0 w-[78%]">
                        <img src={aboutPhoto} alt="" className="w-[84%]" />
                        <img src={square} alt="" className="absolute left-[18%] top-12 w-[24%]" />
                        <ItemContent
                            className="
                                max-w-[84%] mt-[-1em]
                                flex-row items-center font-medium text-[16px] border-2 rounded-sm border-(--text-cl) py-2.5 px-2
                                before:w-4 before:h-4 before:bg-(--icon-cl) before:block before:mr-2.5"
                            >
                                Currently working on Portfolio
                        </ItemContent>
                    </Item>
                </motion.div>

                <motion.div
                    initial={{ opacity:0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="mt-28 flex flex-col items-center w-full"
                >
                    <div className="flex flex-col items-end max-w-max">

                        <Item 
                            variant="outline"
                            className="
                                p-9 z-10 bg-white rounded-md bg-clip-padding backdrop-filter 
                                backdrop-blur-sm bg-opacity-90 border border-(--text-cl) relative
                                hover:border-(--white) ease-in transition duration-200 cursor-pointer group peer"
                        >
                            <ImQuotesLeft className="absolute left-4 top-[-1em] ease-in transition duration-200 group-hover:fill-white" color="var(--text-cl)" size={26} />
                            <ItemContent className="*:text-[24px] *:text-(--white-cl) *:m-auto">
                                <ItemTitle>With great power comes great electricity bill</ItemTitle>
                            </ItemContent>
                            <ImQuotesRight className="absolute right-4 bottom-[-.9em] ease-in transition duration-200 group-hover:fill-white" color="var(--text-cl)" size={26} />
                        </Item>

                        <Item
                            variant="outline"
                            className="
                                p-4 bg-(--background) border-(--text-cl) relative ease-in
                                transition duration-200 cursor-pointer peer-hover:border-(--white)">
                            <ItemContent className="*:text-[24px] *:text-(--white-cl) *:m-auto">
                                <ItemTitle>- Dr. Who</ItemTitle>
                            </ItemContent>
                        </Item>
                    
                    </div>
                </motion.div>

                <VericalLines />
                <IconsInfo />
                <BlurEffect position="right-[27%] top-[12%]" />
                <BlurEffect position="left-[10%] bottom-[14%]" />
            </section>
        </main>
    )
}

export default HomePage