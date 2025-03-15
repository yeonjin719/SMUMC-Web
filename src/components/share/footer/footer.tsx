import * as S from './footer.style';
import Logo from '../../../images/main-light-logo-light.webp';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import ContactModal from '../privacyPolicy/privacyPolicy';
import { FaInstagram } from 'react-icons/fa';
import { CONTECT_INFOS } from '../../../mocks/info';
const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const [modalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        if (!modalOpen) {
            setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (
        <S.Footer>
            {modalOpen && <ContactModal onClose={handleCloseModal} />}
            <S.Logo to={'/'} islight={theme}>
                <img src={Logo}></img>
                SMUMC
            </S.Logo>
            <S.Buttons islight={theme}>
                <FaInstagram
                    onClick={() =>
                        window.open(CONTECT_INFOS[3].data as string, '_blank')
                    }
                    size={20}
                    color={`${theme ? 'black' : 'white'}`}
                ></FaInstagram>
                <S.Button onClick={handleOpenModal} islight={theme}>
                    Privacy Policy
                </S.Button>
                <S.ATag href="mailto:umc.smu@gmail.com" islight={theme}>
                    Contact To
                </S.ATag>
            </S.Buttons>
        </S.Footer>
    );
};

export default Footer;
