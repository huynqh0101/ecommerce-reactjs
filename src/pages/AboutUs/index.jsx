import MyFooter from '@components/Footer/Footer';
import MyHeader from '@components/Header/Header';
import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import Logos from '@/pages/AboutUs/components/Logos';

function AboutUs() {
    const {
        container,
        functionBox,
        specialText,
        btnBack,
        containerTitle,
        line,
        title,
        textS,
        textL,
        containerContent,
        containerContent2,
        des
    } = styles;

    const dataContents = [
        {
            id: '1',
            url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-min.jpg',
            des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.'
        },
        {
            id: '2',
            url: 'https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-copy-2-min.jpg',
            des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.'
        },
        {
            id: '3',
            url: 'http://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-min.jpg',
            des: 'Ac eget cras augue nisi neque lacinia in aliquam. Odio pellentesque sed ultrices dolor amet nunc habitasse proin consec. tur feugiat egestas eget.'
        }
    ];
    const aboutContent = {
        mission: {
            title: 'Our Mission',
            content:
                'To provide high-quality fashion that combines style, comfort, and sustainability. We believe in creating clothing that not only looks good but feels good to wear and is good for the planet.'
        },
        story: {
            title: 'Our Story',
            content:
                'Founded in 2020, Marseille04 began with a simple vision: to create a fashion brand that speaks to the modern individual. What started as a small boutique has grown into a beloved fashion destination.'
        },
        values: [
            {
                title: 'Quality',
                description:
                    'We use premium materials and maintain high manufacturing standards'
            },
            {
                title: 'Sustainability',
                description:
                    'Committed to eco-friendly practices and responsible sourcing'
            },
            {
                title: 'Innovation',
                description:
                    'Constantly evolving our designs to meet contemporary needs'
            }
        ]
    };
    const handleBackPreviousPage = () => {
        window.history.back();
    };

    return (
        <>
            <MyHeader />

            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt;{' '}
                            <span className={specialText}>About us</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handleBackPreviousPage()}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>

                    <div className={containerTitle}>
                        <div className={line}>
                            <div className={title}>
                                <div className={textS}>
                                    we try our best for you
                                </div>
                                <div className={textL}>
                                    Welcome to the Marseille04 Shop
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={containerContent}>
                        {dataContents.map((item) => (
                            <div key={item.id}>
                                <img src={item.url} alt='' />
                                <div className={des}>{item.des}</div>
                            </div>
                        ))}
                    </div>
                    <Logos />
                </div>
                <div className={containerContent2}>
                    {/* Mission Section */}
                    <div className={styles.missionSection}>
                        <h2>{aboutContent.mission.title}</h2>
                        <p>{aboutContent.mission.content}</p>
                    </div>

                    {/* Story Section */}
                    <div className={styles.storySection}>
                        <h2>{aboutContent.story.title}</h2>
                        <p>{aboutContent.story.content}</p>
                    </div>

                    {/* Values Section */}
                    <div className={styles.valuesSection}>
                        <h2>Our Values</h2>
                        <div className={styles.valuesGrid}>
                            {aboutContent.values.map((value, index) => (
                                <div key={index} className={styles.valueCard}>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Images Section */}
                    <div className={styles.gallerySection}>
                        {dataContents.map((item) => (
                            <div key={item.id}>
                                <img src={item.url} alt='' />
                                <div className={des}>{item.des}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </MainLayout>

            <MyFooter />
        </>
    );
}

export default AboutUs;
