import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <div className='footer relative pt-14 break-words '>
            <div className='bg-[#161b22]'>
                <div className='max-w-[1280px] mx-auto text-[12px] md:flex flex-row-reverse py-6 justify-between items-center px-4'>
                    <ul className='flex items-center max-md:mb-4  '>
                        <li className='mr-4'>
                            <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/twitter.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
                        </li>
                        <li className='mr-4'>
                            <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/facebook.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
                        </li>
                        <li className='mr-4'>
                            <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/linkedin.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
                        </li>
                        <li className='mr-4'>
                            <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/youtube.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
                        </li>
                        <li>
                            <a href=""><img src="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg" height="18" width="22" className="d-block" loading="lazy" decoding="async" alt="Twitter icon" /></a>
                        </li>
                    </ul>
                    <ul className='flex items-center mb-4 sm:mb-0 text-[#7d8590] flex-wrap' >
                        <li className="mr-3 ">v2024</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Footer