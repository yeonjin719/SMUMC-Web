import * as S from './privacyPolicy.style';
import Portal from '../../projects/portal/portal';

interface PrivacyPolicyModalProps {
    onClose: () => void;
}

const PrivacyPolicyModal = ({ onClose }: PrivacyPolicyModalProps) => {
    return (
        <Portal>
            <S.Container>
                <S.Backdrop
                    onClick={() => {
                        onClose();
                    }}
                />
                <S.Modal>
                    <S.Xbutton
                        onClick={() => {
                            onClose();
                        }}
                    >
                        <S.CloseBtn></S.CloseBtn>
                    </S.Xbutton>
                    <S.Contents>
                        <S.Content>
                            <h3>[개인정보 문의]</h3>
                            <S.Description>
                                개인정보나 홈페이지에 관련된 문의사항이 있으시면
                                <a href="mailto:kyj0719@gmail.com">
                                    kyj0719@gmail.com
                                </a>
                                로 연락해 주세요.
                            </S.Description>
                        </S.Content>

                        <div>Copyright ⓒ 2025. Cotton All rights reserved.</div>
                    </S.Contents>
                </S.Modal>
            </S.Container>
        </Portal>
    );
};

export default PrivacyPolicyModal;
