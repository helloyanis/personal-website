"use client"
import { useTranslation } from 'react-i18next';
import Card from '../components/card';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    const { t } = useTranslation("about");
    function calculateAge(birthday: Date) {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return (
        <section className="grid grid-cols-1 gap-4 p-4">
            <Card>
                <p className="text-2xl font-bold text-center">
                    {t("aboutSiteTitle")}
                </p>
                <p className="text-center">
                    {t("aboutSiteContent1")}
                </p>
                <div className="flex justify-center">
                <Button 
                    variant="contained" 
                    color="primary" 
                    href="https://github.com/helloyanis/helloyanis.github.io"
                    startIcon={
                        <img
                            src="/assets/icons/github-mark-white.svg"
                            alt="GitHub icon" 
                            className="icon-dark-mode w-6 h-6"
                        />
                    }
                >
                    {t("sourceCode")}
                </Button>
                </div>
                <p className="text-center">
                    {t("aboutSiteContent2")}
                </p>
                
            </Card>
            <Card>              
                <p className="text-2xl font-bold text-center">
                    {t("aboutMeTitle")}
                </p>
                <p className="text-center">
                    {t("aboutMeContent1")}
                    {calculateAge(new Date("2003-07-08"))}
                    {t("aboutMeContent2")}
                </p>
                <div className='badgesSection m-3'>
                    <p className="text-center font-bold">
                        {t("skillLanguages")}
                    </p>
                    <div className="flex justify-center items-center flex-wrap">
                        <img className="m-1" src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff" alt="Python"/>
                        <img className="m-1" src="https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white" alt="HTML5"/>
                        <img className="m-1" src="https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff" alt="CSS3"/>
                        <img className="m-1" src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript"/>
                        <img className="m-1" src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" alt="React"/>
                        <img className="m-1" src="https://img.shields.io/badge/Kotlin-%237F52FF.svg?logo=kotlin&logoColor=white" alt="Kotlin"/>
                        <img className="m-1" src="https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white" alt="Java"/>
                        <img className="m-1" src="https://img.shields.io/badge/php-%23777BB4.svg?&logo=php&logoColor=white" alt="PHP"/>
                        <img className="m-1" src="https://img.shields.io/badge/Scratch-4D97FF?logo=scratch&logoColor=fff" alt="Scratch" title={t("fillInBadge")}/>
                        <img className="m-1"src="https://img.shields.io/badge/Markdown-%23000000.svg?logo=markdown&logoColor=white" alt="Markdown" title={t("fillInBadge")}/>
                    </div>
                    <p className="text-center font-bold">
                        {t("skillTools")}
                    </p>
                    <div className="flex justify-center items-center flex-wrap">
                        <img className="m-1" src="https://img.shields.io/badge/VSCode-007ACC?logo=visual-studio-code&logoColor=fff" alt="Visual Studio Code"/>
                        <img className="m-1" src="https://img.shields.io/badge/AndroidStudio-3DDC84?logo=android-studio&logoColor=fff" alt="Android Studio"/>
                        <img className="m-1" src="https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff" alt="Figma"/>
                        <img className="m-1" src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff" alt="Git"/>
                        <Link href="https://github.com/helloyanis" passHref>
                            <img className="m-1" src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff" alt="GitHub"/>
                        </Link>
                        <img className="m-1" src="https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=fff" alt="Windows"/>
                        <img className="m-1" src="https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=fff" alt="Android"/>
                        <img className="m-1" src="https://img.shields.io/badge/Firefox-FF7139?logo=firefox-browser&logoColor=fff" alt="Firefox"/>
                        
                    </div>
                    <p className="text-center font-bold">
                        {t("miscBadges")}
                    </p>
                    <div className="flex justify-center items-center flex-wrap">
                        <Link href="https://www.truity.com/test/type-finder-personality-test-new" passHref>
                            <img className="m-1" src={`https://img.shields.io/badge/${t("personalityType")}-INTP-green`} alt="Ubuntu"/>
                        </Link>

                    </div>
                </div>
            </Card>
        </section>
    );
}
