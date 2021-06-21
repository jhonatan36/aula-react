import React from 'react';
import { FooterStyled, FooterContainer, FooterTitle, AppList } from './Footer.style';
import { Typography, Box } from '@material-ui/core';

const Footer = () => {
    return (
        <FooterStyled>
            <FooterContainer>
                <Box sx={{ maxWidth: '400px'}} >
                    <FooterTitle>Quem Somos</FooterTitle>
                    <Typography variant={'body2'} sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis, nesciunt soluta voluptates atque ullam dolores quam corrupti inventore suscipit ex quaerat, velit explicabo aperiam architecto perferendis aspernatur illum fugiat?
                                            Odio cum, earum consequatur dolorum pariatur mollitia sed illum nihil eum adipisci asperiores vero laboriosam! Accusamus, dolorem architecto? Aperiam quas facilis tempora cumque assumenda illo harum dicta earum neque labore.
                                            Cupiditate iure ea commodi nihil adipisci id in est cumque nemo dolores quas, iste culpa, delectus a perspiciatis doloribus aperiam laudantium. Sapiente rem odit, eum commodi ipsam minus sequi repudiandae.
                    </Typography>
                </Box>

                <div>
                    <FooterTitle>Baixe Nossos Aplicativos</FooterTitle>
                    <AppList>
                        <li>
                            <a href={'/'}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            >
                                <img src={'/img/logos/app-store.png'}
                                    alt={'App Store'}/>
                            </a>
                        </li>
                        <li>
                            <a href={'/'}
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                            >
                                <img src={'/img/logos/google-play.png'}
                                    alt={'Google Play'}/>
                            </a>
                        </li>
                    </AppList>
                </div>
            </FooterContainer>
        </FooterStyled>
    );
};

export default Footer;
