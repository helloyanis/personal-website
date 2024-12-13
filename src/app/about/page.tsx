"use client"
import { useTranslation } from 'react-i18next';
import Card from '../components/card';
import { Button } from '@mui/material';
import Shield from '../components/shield';
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
                        <Shield
                            src="/assets/icons/github.svg"
                            alt="GitHub icon"
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
                        <Shield src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff" alt="Python"/>
                        <Shield src="https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white" alt="HTML5"/>
                        <Shield src="https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff" alt="CSS3"/>
                        <Shield src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript"/>
                        <Shield src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" alt="React"/>
                        <Shield src="https://img.shields.io/badge/Kotlin-%237F52FF.svg?logo=kotlin&logoColor=white" alt="Kotlin"/>
                        <Shield src="https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white" alt="Java"/>
                        <Shield src="https://img.shields.io/badge/php-%23777BB4.svg?&logo=php&logoColor=white" alt="PHP"/>
                        <Link href="https://scratch.mit.edu/users/helloyanis/" passHref className="hover-effect">
                            <Shield src="https://img.shields.io/badge/Scratch-4D97FF?logo=scratch&logoColor=fff" alt="Scratch" title={t("fillInBadge")}/>
                        </Link>
                        <Shield src="https://img.shields.io/badge/Markdown-%23000000.svg?logo=markdown&logoColor=white" alt="Markdown" title={t("fillInBadge")}/>
                    </div>
                    <p className="text-center font-bold">
                        {t("skillTools")}
                    </p>
                    <div className="flex justify-center items-center flex-wrap">
                        <Shield src="https://img.shields.io/badge/VSCode-007ACC?logo=visual-studio-code&logoColor=fff" alt="Visual Studio Code"/>
                        <Shield src="https://img.shields.io/badge/AndroidStudio-3DDC84?logo=android-studio&logoColor=fff" alt="Android Studio"/>
                        <Shield src="https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff" alt="Figma"/>
                        <Shield src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff" alt="Git"/>
                        <Link href="https://github.com/helloyanis" passHref className="hover-effect">
                            <Shield src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff" alt="GitHub"/>
                        </Link>
                        <Shield src="https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=fff" alt="Windows"/>
                        <Shield src="https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=fff" alt="Android"/>
                        <Link href="https://addons.mozilla.org/user/17521637/" passHref className="hover-effect">
                            <Shield src="https://img.shields.io/badge/Firefox-FF7139?logo=firefox-browser&logoColor=fff" alt="Firefox"/>
                        </Link>
                    </div>
                    <p className="text-center font-bold">
                        {t("miscBadges")}
                    </p>
                    <div className="flex justify-center items-center flex-wrap">
                        <Link href="https://www.truity.com/test/type-finder-personality-test-new" passHref className="hover-effect">
                            <Shield src={`https://img.shields.io/badge/${t("personalityType")}-INTP-purple`} alt={t("personalityType")}/>
                        </Link>
                        <div className="flex justify-center items-center flex-wrap flex-col">
                            <Link href="https://sortinghatchats.wordpress.com/" passHref className="hover-effect">
                            <Shield title={t("hogwartsHousePrimaryExplain")} src={`https://img.shields.io/badge/${t("hogwartsHousePrimaryTitle")}-${t("hogwartsHousePrimaryValue")}-red`} alt={`${t("hogwartsHousePrimaryTitle")}-${t("hogwartsHousePrimaryValue")}`}/>
                        </Link>
                        <Link href="https://sortinghatchats.wordpress.com/" passHref className="hover-effect">
                            <Shield title={t("hogwartsHouseSecondaryExplain")} src={`https://img.shields.io/badge/${t("hogwartsHouseSecondaryTitle")}-${t("hogwartsHouseSecondaryValue")}-blue`} alt={`${t("hogwartsHouseSecondaryTitle")}-${t("hogwartsHouseSecondaryValue")}`}/>
                        </Link>
                        </div>
                        <div className="flex justify-center items-center flex-wrap flex-col">
                            <Link href="https://www.politicalcompass.org/" passHref className="hover-effect">
                            <Shield title={t("politicalCompassExplain")} src={`https://img.shields.io/badge/${t("politicalCompassEconomicTitle")}-${t("politicalCompassEconomicValue")}-green`} alt={`${t("politicalCompassEconomicTitle")}-${t("politicalCompassEconomicValue")}`}/>
                        </Link>
                        <Link href="https://www.politicalcompass.org/" passHref className="hover-effect">
                            <Shield title={t("politicalCompassExplain")} src={`https://img.shields.io/badge/${t("politicalCompassSocialTitle")}-${t("politicalCompassSocialValue")}-green`} alt={`${t("politicalCompassSocialTitle")}-${t("politicalCompassSocialValue")}`}/>
                        </Link>
                        </div>
                        <Link href={t("furryWikiLink")} passHref className="hover-effect">
                            <Shield title={t("fursonaExplain")} src={`https://img.shields.io/badge/Fursona-${t("fursonaSpecies")}-orange?logo=furrynetwork`} alt={t("fursonaSpieces")}/>
                        </Link>
                    </div>
                </div>
            </Card>
        </section>
    );
}
