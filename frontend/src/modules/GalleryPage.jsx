import atomic_chess from '../assets/atomic_chess_portfolio_project.png';
import basketball from '../assets/basketball_interest.jpg';
import san_gimignano from '../assets/san_gimignano_place.jpg';
import shikkotsu_toya from '../assets/shikkotsu-toya_national_park.jpg';

function GalleryPage() {
    const images = [
        {
            path: atomic_chess,
            caption: "Screenshot of my coding project from CS162, Atomic Chess. Spring 2024.",
            title: "© 2024 Sean Bleyl"
        },
        {
            path: basketball,
            caption: "My favorite sport, Basketball.",
            title: "© 2024 Sean Bleyl"
        },
        {
            path: san_gimignano,
            caption: "One of the places I visited, San Gimignano in Tuscany, Italy. Spring 2023.",
            title: "© 2024 Sean Bleyl"
        },
        {
            path: shikkotsu_toya,
            caption: "One of the places I visited, Shikkotsu-Toya National Forest in Hokkaido, Japan. Fall 2023.",
            title: "© 2024 Sean Bleyl"
        }
    ];
    
    const imgSize = {
        width: '500px',
        height: '400px'
    };

    return (
       <>
            <h2>Gallery</h2>
            <p>Here are some images that reflect my experiences, projects, and interests.</p>
            <article className="gallery">
                {
                    images.map((image) =>
                        <figure>
                            <img src={image.path} alt={image.caption} title={image.title} style={imgSize} />
                            <figcaption>{image.caption}</figcaption>
                        </figure>
                    )
                }
            </article>
       </>
    );
}

export default GalleryPage;