import "./content_title.css"
const ContentTitle = (props: any) => {
    return (
        <div className="content-title" style={{color: props.textColor}}>
            {props.children}
        </div>
    )
}
export default ContentTitle;