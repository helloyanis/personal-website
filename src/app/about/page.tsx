"use client"
import "@/app/i18n";
import { useTranslation } from 'react-i18next';
import Card from '../../components/card';
import { Button, Skeleton } from '@mui/material';
import Shield from '../../components/shield';
import Link from 'next/link';
import { SiGithub } from '@icons-pack/react-simple-icons';

export default function Page() {
    const { t, ready } = useTranslation("about");

    function calculateAge(birthday: Date) {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    return (
        <section className="grid grid-cols-1 gap-4 p-4">
            <Card height={300}>
                <p className="text-2xl font-bold text-center">
                    {!ready ? <Skeleton/> : t("aboutSiteTitle")}
                </p>
                <p className="text-center">
                    {!ready ? <Skeleton height={100}/> : t("aboutSiteContent1")}
                </p>
                <div className="flex justify-center">
                    <Button
                        variant="outlined"
                        color="primary"
                        href="https://github.com/helloyanis/helloyanis.github.io"
                        startIcon={
                            <SiGithub/>
                        }
                    >
                        {!ready ? <Skeleton width={100}/> : t("sourceCode")}
                    </Button>
                </div>
                <p className="text-center">
                    {!ready ? <Skeleton height={100}/> : t("aboutSiteContent2")}
                </p>

            </Card>
            <Card height={500}>
                <p className="text-2xl font-bold text-center">
                    {!ready ? <Skeleton/> : t("aboutMeTitle")}
                </p>
                <p className="text-center">
                    {!ready ? <Skeleton/> : t("aboutMeContent1")}
                    {ready && calculateAge(new Date("2003-07-08"))}
                    {!ready ? <Skeleton/> : t("aboutMeContent2")}
                </p>
                <div className='badgesSection m-3'>
                    <p className="text-center font-bold">
                        {!ready ? <Skeleton/> : t("skillLanguages")}
                    </p>
                    <div className="flex justify-center items-center flex-wrap">
                        <Shield src="https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=fff" alt="Python" />
                        <Shield src="https://img.shields.io/badge/HTML-%23E34F26.svg?logo=html5&logoColor=white" alt="HTML5" />
                        <Shield src="https://img.shields.io/badge/CSS-1572B6?logo=css3&logoColor=fff" alt="CSS3" />
                        <Shield src="https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000" alt="JavaScript" />
                        <Shield src="https://img.shields.io/badge/React-%2320232a.svg?logo=react&logoColor=%2361DAFB" alt="React" />
                        <Shield src="https://img.shields.io/badge/Kotlin-%237F52FF.svg?logo=kotlin&logoColor=white" alt="Kotlin" />
                        <Shield src="https://img.shields.io/badge/Java-%23ED8B00.svg?logo=openjdk&logoColor=white" alt="Java" />
                        <Shield src="https://img.shields.io/badge/php-%23777BB4.svg?&logo=php&logoColor=white" alt="PHP" />
                        <Link href="https://scratch.mit.edu/users/helloyanis/" passHref rel="me" className="hover-effect">
                            <Shield src="https://img.shields.io/badge/Scratch-4D97FF?logo=scratch&logoColor=fff" alt="Scratch" title={!ready ? "" : t("fillInBadge")} />
                        </Link>
                        <Shield src="https://img.shields.io/badge/Markdown-%23000000.svg?logo=markdown&logoColor=white" alt="Markdown" title={!ready ? "" : t("fillInBadge")} />
                    </div>
                    <p className="text-center font-bold">
                        {!ready ? <Skeleton/> : t("openPGPKey")}
                    </p>
                    <div className="flex justify-center items-center flex-wrap">
                        <Link href="https://keys.openpgp.org/search?q=hello%40🦊💻.ws" passHref rel="me" className="hover-effect">
                            <Shield src={`https://img.shields.io/badge/PGP-${!ready ? <Skeleton/> : t("getKey")}-313131?logo=gnuprivacyguard&logoColor=white`} alt="PGP" />
                        </Link>
                    </div>
                    <p className="text-center font-bold">
                        {!ready ? <Skeleton/> : t("skillTools")}
                    </p>
                    <div className="flex justify-center items-center flex-wrap">
                        <Shield src="https://img.shields.io/badge/VSCode-007ACC?logo=visual-studio-code&logoColor=fff" alt="Visual Studio Code" />
                        <Shield src="https://img.shields.io/badge/AndroidStudio-3DDC84?logo=android-studio&logoColor=fff" alt="Android Studio" />
                        <Shield src="https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=fff" alt="Figma" />
                        <Shield src="https://img.shields.io/badge/Git-F05032?logo=git&logoColor=fff" alt="Git" />
                        <Link href="https://github.com/helloyanis" passHref rel="me" className="hover-effect">
                            <Shield src="https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=fff" alt="GitHub" />
                        </Link>
                        <Shield src="https://img.shields.io/badge/Windows-0078D6?logo=windows&logoColor=fff" alt="Windows" />
                        <Shield src="https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=fff" alt="Android" />
                        <Link href="https://addons.mozilla.org/user/17521637/" passHref rel="me" className="hover-effect">
                            <Shield src="https://img.shields.io/badge/Firefox-FF7139?logo=firefox-browser&logoColor=fff" alt="Firefox" />
                        </Link>
                    </div>
                    <p className="text-center font-bold">
                        {!ready ? <Skeleton/> : t("miscBadges")}
                    </p>
                    <div className="flex justify-center items-center flex-wrap">
                        <Link href="https://ch.tetr.io/u/helloyanis" passHref rel="me" className="hover-effect">
                            <Shield src="https://img.shields.io/badge/TETR.IO-Tetra_Channel-000?logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANUAAADVCAYAAADAQLWDAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADdcAAA3XAUIom3gAAAPBSURBVHhe7d0xbiRFGIDR6V4fghBnhNwAcwJiIsxJdo8AJ8DcgCNwBN9gN9zQ+a5nqJFLWARGi/Sh7pHfk1rdFflXjz+r5GBqOQ0HLsHPy7LczWd2bJ13ICIqiIkKYqKCmKggJiqIiQpiooKYqCAmKoiJCmKigpioICYqiIkKYqKCmKggJiqIiQpiooKYqCAmKoiJCmKigpioICYqiIkKYqKCmKggJiqIiQpiooKYqCAmKoidjyd9N583N2b5blmWm7nc1JjlYczy61zuwR9jnvv5DF/mHPi4duF4PL6fY8F/YvsHMVFBTFQQExXERAWxZd534fT07/23T6ttjVk+rOt6PZf8i/Guvhm3r55Wr95HUb1AVF/ueDz+tizL7Vy+auP35s72D2KigpioICYqiIkKYqKCmKggJiqIiQpiooKYqCAmKoiJCmKigpioICYqiIkKYqKCmKggJiqIiQpiooKYqCAmKoiJCmKigpioILar71LnMvku9We+Sx3+B6KC2N6O0rkZt/O1uTHLw7quv8zl4dOn08267me2q6vn2bZ+b+Pn/zC2f9/O5as23sWd86leMGb5x/lUj4/7mm1E9fdse3pvr905Kts/iImK0vXYBm5mzrA5UUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUlN6fNjRn2JyoILbM+y6MPzbvxu3t02pbY5YP67pez+Xh8XFfs11dPc+2p/e2tfO7WZbl97ncwr2oXiCqyzTexZ/jc/t+Ljdh+wcxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQcxROi+4sKN0vh6388Xh8LAsy/183oSoXnBJUbEvtn8QExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUEBMVxEQFMVFBTFQQExXERAUxUUFMVBATFcREBTFRQUxUENvbSYq34/ppLrf2cV3XH+fz4fPn0+2y7Ge2N2+eZ2NPDoe/AB3c2VDbkwohAAAAAElFTkSuQmCC" alt="TETR.IO" /> {/*Wow, the tetr.io logo is really big for some reason!*/}
                        </Link>
                        <Link href="https://www.truity.com/test/type-finder-personality-test-new" passHref rel="me" className="hover-effect">
                            <Shield src={`https://img.shields.io/badge/${!ready ? <Skeleton/> : t("personalityType")}-INTP-purple`} alt={!ready ? "" : t("personalityType")} />
                        </Link>
                        <div className="flex justify-center items-center flex-wrap flex-col">
                            <Link href="https://sortinghatchats.wordpress.com/" passHref rel="me" className="hover-effect">
                                <Shield title={!ready ? "" : t("hogwartsHousePrimaryExplain")} src={`https://img.shields.io/badge/${!ready ? <Skeleton/> : t("hogwartsHousePrimaryTitle")}-${!ready ? <Skeleton/> : t("hogwartsHousePrimaryValue")}-red`} alt={`${!ready ? <Skeleton/> : t("hogwartsHousePrimaryTitle")}-${!ready ? <Skeleton/> : t("hogwartsHousePrimaryValue")}`} />
                            </Link>
                            <Link href="https://sortinghatchats.wordpress.com/" passHref rel="me" className="hover-effect">
                                <Shield title={!ready ? "" : t("hogwartsHouseSecondaryExplain")} src={`https://img.shields.io/badge/${!ready ? <Skeleton/> : t("hogwartsHouseSecondaryTitle")}-${!ready ? <Skeleton/> : t("hogwartsHouseSecondaryValue")}-blue`} alt={`${!ready ? <Skeleton/> : t("hogwartsHouseSecondaryTitle")}-${!ready ? <Skeleton/> : t("hogwartsHouseSecondaryValue")}`} />
                            </Link>
                        </div>
                        <div className="flex justify-center items-center flex-wrap flex-col">
                            <Link href="https://www.politicalcompass.org/" passHref rel="me" className="hover-effect">
                                <Shield title={!ready ? "" : t("politicalCompassExplain")} src={`https://img.shields.io/badge/${!ready ? <Skeleton/> : t("politicalCompassEconomicTitle")}-${!ready ? <Skeleton/> : t("politicalCompassEconomicValue")}-green`} alt={`${!ready ? <Skeleton/> : t("politicalCompassEconomicTitle")}-${!ready ? <Skeleton/> : t("politicalCompassEconomicValue")}`} />
                            </Link>
                            <Link href="https://www.politicalcompass.org/" passHref rel="me" className="hover-effect">
                                <Shield title={!ready ? "" : t("politicalCompassExplain")} src={`https://img.shields.io/badge/${!ready ? <Skeleton/> : t("politicalCompassSocialTitle")}-${!ready ? <Skeleton/> : t("politicalCompassSocialValue")}-green`} alt={`${!ready ? <Skeleton/> : t("politicalCompassSocialTitle")}-${!ready ? <Skeleton/> : t("politicalCompassSocialValue")}`} />
                            </Link>
                        </div>
                        <Link href={!ready ? "" : t("furryWikiLink")} passHref rel="me" className="hover-effect">
                            <Shield src={`https://img.shields.io/badge/Fursona-${!ready ? <Skeleton/> : t("fursonaSpecies")}-orange?logo=furrynetwork`} alt={!ready ? "" : t("fursonaSpieces")} />
                        </Link>
                        <Link href={!ready ? "" : t("learnEsperantoLink")} passHref rel="me" className="hover-effect">
                            <Shield title={!ready ? "" : t("learnEsperantoExplain")} src={`https://img.shields.io/badge/${!ready ? <Skeleton/> : t("learnEsperantoTitle")}-${!ready ? <Skeleton/> : t("learnEsperantoValue")}-green?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAtOTYwIDk2MCA5NjAiIHdpZHRoPSIyNHB4IiBmaWxsPSIjRkZGRkZGIj48cGF0aCBkPSJtNDc2LTgwIDE4Mi00ODBoODRMOTI0LTgwaC04NGwtNDMtMTIySDYwM0w1NjAtODBoLTg0Wk0xNjAtMjAwbC01Ni01NiAyMDItMjAycS0zNS0zNS02My41LTgwVDE5MC02NDBoODRxMjAgMzkgNDAgNjh0NDggNThxMzMtMzMgNjguNS05Mi41VDQ4NC03MjBINDB2LTgwaDI4MHYtODBoODB2ODBoMjgwdjgwSDU2NHEtMjEgNzItNjMgMTQ4dC04MyAxMTZsOTYgOTgtMzAgODItMTIyLTEyNS0yMDIgMjAxWm00NjgtNzJoMTQ0bC03Mi0yMDQtNzIgMjA0WiIvPjwvc3ZnPg==`} alt={`${!ready ? <Skeleton/> : t("learnEsperantoTitle")}-${!ready ? <Skeleton/> : t("learnEsperantoValue")}`} />
                        </Link>
                    </div>
                </div>
            </Card>
        </section>
    );
}
