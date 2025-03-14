import * as S from './projectCard.style';
import { Project } from '../../../mocks/projectData';
import { useState } from 'react';
import ProjectModal from '../projectModal/projectModal';

function ProjectCard(props: Project) {
    const { name, description, img, year } = props;
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
        <S.Container onClick={handleOpenModal}>
            {modalOpen && (
                <ProjectModal onClose={handleCloseModal} {...props} />
            )}
            <S.Img>
                <img
                    src={
                        'https://raw.githubusercontent.com/yeonjin719/SMUMC-DATA/main/public' +
                        img
                    }
                    alt={name}
                    onError={(e) => {
                        e.currentTarget.src =
                            'https://raw.githubusercontent.com/yeonjin719/SMUMC-DATA/main/public/images/recrjitingposter.webp';
                    }}
                />
            </S.Img>
            <S.Content className="card">
                <S.Text>{year}기</S.Text>
                <S.Title>{name}</S.Title>
                <S.Description>{description}</S.Description>
            </S.Content>
        </S.Container>
    );
}

export default ProjectCard;
