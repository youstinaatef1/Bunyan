import CardStatus from "../../Ui/CardStatus/CardStatus";
function Status(){
    return(
        <section className="py-4">
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3">
                    
                   <CardStatus counter = "120" title = "Projects" icon = {<i className="fa-regular fa-building"></i>}/>
                </div>
                <div className="col-12 col-md-3"><CardStatus counter = "150" title = "Users" icon={<i className="fa-regular fa-user"></i>}/></div>
                <div className="col-12 col-md-3"><CardStatus counter = "200" title = "Developers" icon={<i className="fa-solid fa-code"></i>}/></div>
                <div className="col-12 col-md-3"><CardStatus counter = "50" title = "Blogs" icon={<i className="fa-solid fa-blog"></i>}/></div>
            </div>
        </div>
        </section>
    );
}
export default Status;