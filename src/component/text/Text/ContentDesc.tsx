import "./content_desc.css"
const ContentDesc = (props: any) => {
    return (
        <div className="content-desc" style={{color: props.textColor}}>
            {props.children}
        </div>
    )
};
export default ContentDesc