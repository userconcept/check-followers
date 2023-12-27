import Title from './../Title/Title.jsx';
import Text from './../Text/Text.jsx';

function Intro() {
    return (
        <section className="intro">
            <Title className="intro__title" level="1">check-followers</Title>
            <Text className="intro__text">Shows users you are following,
            but who are not following you and reverse</Text>
        </section>
    );
}

export default Intro;
