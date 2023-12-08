import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
    id: number;
    section: string;
    link: string[];
}

const products: ProductType[] = [
    {
        id: 1,
        section: "Company",
        link: ['About us', 'Blog', 'Contact us', 'Pricing', 'Testimonials'],
    },
    {
        id: 2,
        section: "Support",
        link: ['Help center', 'Terms of service', 'Legal', 'Privacy Policy', 'Status']
    }
]

const footer = () => {
    return (
        <div className="bg-purple " id="first-section">
            <div className="mx-auto mt-5 max-w-2xl pt-2 pb-8 sm:px-2 lg:max-w-7xl lg:px-4">
                <div className="mt-10 flex flex-row items-center justify-center">
                    <div className="basis-1/4">
                        <div className='flex gap-4'>
                            <a href="https://github.com/IvanGael" target="_blank">
                                <img src={'/assets/footer/github.svg'} alt="github" className='footer-icons' />
                            </a>
                            <a href="https://www.instagram.com/_ivan_gael" target="_blank">
                                <img src={'/assets/footer/instagram.svg'} alt="instagram" className='footer-icons' />
                            </a>
                            <a href="https://www.linkedin.com/in/ivan-apedo/" target="_blank">
                                <img src={'/assets/footer/linkedin.svg'} alt="linkedin" className='footer-icons' />
                            </a>
                            <a href="https://www.twitter.com/IvanGal19" target="_blank">
                                <img src={'/assets/footer/twitter2.svg'} alt="twitter" className='footer-icons' />
                            </a>
                        </div>
                    </div>

                    <div className='basis-1/4'>
                        <h3 className='text-center text-offwhite'>Copyright &copy;{new Date().getFullYear()} | Tous droits réservés</h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default footer;
