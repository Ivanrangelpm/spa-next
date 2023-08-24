import reactLogo from "../assets/react.svg"

export default function Conteudo(props){

    let altReactLogo = "Logo do React";

    return(
        <section>
            <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur odio qui ab, exercitationem a ullam perspiciatis recusandae maiores perferendis voluptate, at cumque eligendi sunt quisquam. Quia accusantium nam eveniet ex.
          Laborum tenetur vero natus eligendi libero dolores repellat facere illo facilis quisquam voluptate maxime, dolore perferendis ipsam totam, at sunt vel rerum iusto beatae nostrum et excepturi! Ipsam, sunt totam?
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo pariatur sit impedit natus accusantium soluta, rerum sequi quis quod deleniti, maxime ipsum, quisquam aspernatur vero minima fuga. Aperiam, sint modi!
          Expedita provident beatae itaque, eligendi rerum corporis! Delectus incidunt impedit error perferendis qui iste vel reprehenderit aspernatur numquam corrupti itaque eos commodi voluptate, tenetur esse ipsam officiis ducimus necessitatibus iure.
                </p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ex, accusamus earum unde doloribus tempora praesentium minima suscipit quis perspiciatis sapiente, atque modi sint velit eius quidem ea iste vitae?
          Quo quibusdam architecto officia veritatis? Eveniet voluptatem vitae odio perspiciatis? Itaque perspiciatis numquam voluptate, odio fugit pariatur dolores tempora labore corporis possimus qui harum repellat nisi, impedit eligendi asperiores id.
                </p>
                <img src={reactLogo} alt={altReactLogo}/>
                <img src={props.viteLogoProps} alt={props.viteLogoAltProps}/>
            </div>
        </section>
    );
}