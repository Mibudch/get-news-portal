import React from 'react'
import './style/singleNewsSection.css'
import SingleNewsAdvBlock from '../adv/singleNewsAdvBlock.js'
import { withRouter } from 'react-router-dom'
function SingleNewsSection(props) {
    const singleNewsContent = () => {
        const singleNewsName = props.match.params.name
        for (let elem of props.allNewsContent) {
            if (elem.title.toLowerCase() === singleNewsName) {
                return elem
            }
        }
    }
    return (
        <section className='section__block'>
            <div className='section__container'>
                <div className='top__container'>
                    <div className='head__container'>
                        <div className='category'>{singleNewsContent().category}</div>
                        <div className='time'>{singleNewsContent().publishedAt.slice(11, 16)}</div>
                    </div>
                    <div className='image__container'><img className='image' src={singleNewsContent().urlToImage} alt=''></img></div>
                    <div className='title'><h2>{singleNewsContent().title}</h2></div>
                </div>
                <div className='bottom__container'>
                    <div className='content'>
                        <p>{singleNewsContent().description}</p>
                        <p>Данное портфолио использует «условно-бесплатную» версию API, поэтому содержание статьи ограничено.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

                    </div>
                    <div className='source__container'>
                        <div className='source__title'>Источник:</div>
                        <div className='source__link'>
                            <a rel="noopener noreferrer" target='_blank' href={singleNewsContent().url}>{singleNewsContent().url}</a>
                        </div>
                    </div>
                </div>
            </div>
            <SingleNewsAdvBlock />
        </section>
    )
}
export default withRouter(SingleNewsSection)