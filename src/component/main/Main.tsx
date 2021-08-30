import "./start.css"
import Content from "../text/Content";
import CodeFrame from "../text/CodeFrame";
import {useState} from "react";
import GalleryContainer from "../gallery/GalleryContainer";

const Start = (props: any) => {
    const [page, setPage] = useState(1)
    const test = () => {
        return page===1?"0":"-54.5%"
    }
    return (
        <div className="flex flex-c" style={{overflow: "hidden"}}>
            <div className="start-container" style={{backgroundColor: props.revBackgroundColor}}>
                <Content textColor={props.backgroundColor} title="First Note">
                    this page is under development<br/>
                    welcome to my github home page i hope that you enjoy the contents.<br/><br/>
                    i will add project documentation pages soon as i reach 5 public projects.<br/><br/>
                    this is a single page application written using ReactJS you can see the scripts on
                    <a href="https://github.com/userd-q" style={{textDecoration: "none"}}> Here</a>
                </Content>
            </div>
            <div className="start-container" style={{backgroundColor: props.revBackgroundColor, width: "100%"}}>
                <GalleryContainer items={[]} test={test}/>
                <div className="m-auto"
                     style={{backgroundColor: "white", cursor: "pointer", width: "130px", height: "30px"}}
                     onClick={() => {
                         setPage(page === 1 ? 2 : 1)
                     }}>
                    test
                </div>
            </div>
            <div className="start-container" style={{backgroundColor: props.backgroundColor}}>
                <Content textColor={props.revBackgroundColor} title="Coding Tips">
                    here i have some tips for making your code more human readable.<br/>
                    someone will not agree with this code structure but it's more common and human readable by most
                    people.
                </Content>
                <Content textColor={props.revBackgroundColor} title="Curly Braces">
                    some people (like me) will prefer to place curly braces like this
                    <CodeFrame>
                        {
                            "int main() {\n/*rest of code*/\n}"
                        }
                    </CodeFrame>
                    some others prefer this
                    <CodeFrame>
                        {
                            "int main() \n{\n/*rest of code*/\n}"
                        }
                    </CodeFrame>
                    both are fine, they are the same, but doing this
                    <CodeFrame>
                        {
                            "int main() { /*rest of code*/ }"
                        }
                    </CodeFrame>
                    will decrease the readability. so the body or statements shouldn't be single lined with braces.
                </Content>
                <Content textColor={props.revBackgroundColor} title="Indenting">
                    indenting is one of the most important phases in code readability.
                    indenting will help you to read and edit more easily.<br/>
                    compare these codes to see what i mean
                    <CodeFrame>
                        {
                            "int main() {\n\tprintf(\"Hello World!\")\n}"
                        }
                    </CodeFrame>
                    <CodeFrame>
                        {
                            "int main() {\nprintf(\"Hello World!\")\n}"
                        }
                    </CodeFrame>
                    the only difference is just a tab, but the first one is more human readable.
                    most of IDEs have a feature called formatting or line indenting; by using them the IDE will
                    make your code more human readable by indenting each line of your code. but it's better to
                    indent lines by yourself.
                </Content>
                <Content textColor={props.revBackgroundColor} title="Justifying">
                    justifying your code is not a important phase, but if you justify your code like this
                    <CodeFrame>
                        {
                            "struct fruits {\n\tchar* cucumber  ;\n\tchar* watermelon;\n}"
                        }
                    </CodeFrame>
                    sometimes is better than
                    <CodeFrame>
                        {
                            "struct fruits {\n\tchar* cucumber;\n\tchar* watermelon;\n}"
                        }
                    </CodeFrame>
                </Content>
                <Content textColor={props.revBackgroundColor} title="Duplicating">
                    one of the most readability-decreasing things is code duplication.
                    by duplicating a code, readability and flexibility of your code will be decreased.
                    compare these codes
                    <CodeFrame>
                        {
                            "int birthDate = 0;\nscanf(\"%d\", &birthDate);\n" +
                            "if (2021 - birthDate < 18) {\n\tprintf(\"You are under 18\");\n}\n" +
                            "else if (2021 - birthDate >= 18) {\n\tprintf(\"You've been passed 18\");\n}\n" +
                            "else {\n\tprintf(\"You are 18\");\n}\n" +
                            "printf(\"You are %d years old\", 2021 - birthDate);"
                        }
                    </CodeFrame>
                    <CodeFrame>
                        {
                            "int birthDate = 0, age;\nscanf(\"%d\", &birthDate);\n" +
                            "age = 2021 - birthDate;\n" +
                            "if (age < 18) {\n\tprintf(\"You are under 18\");\n}\n" +
                            "else if (age > 18) {\n\tprintf(\"You've been passed 18\");\n}\n" +
                            "else {\n\tprintf(\"You are 18\");\n}\n" +
                            "printf(\"You are %d years old\n\", age);"
                        }
                    </CodeFrame>
                    as you can see the only difference is in code 2 i've prevented to duplicate
                    <code className="lower-case"> 2021 - birthDate</code> because the code duplication,
                    even as simple and small as this case, will decrease the code performance and readability.
                </Content>
                <Content textColor={props.revBackgroundColor} title="Commenting">
                    commenting is another important phase for complex parts of a code;
                    by complex i mean parts of a code those someone, who reviews your code will
                    not understand well.<br/>
                    imagine you are reading a part of my program code and this is what you see
                    <CodeFrame>
                        {
                            "void is_valid(struct validation_t* v) {\n" +
                            "\tif(\n" +
                            "\tMATCHES(v->validation.get_regex, v->args->current)\n\t){...}\n}"
                        }
                    </CodeFrame>
                    as a reviewer, you should know the reason of using
                    <code className="lower-case"> struct validation_t</code> and
                    <code className="lower-case"> is_valid </code>
                    ,but here you should find it out by yourself and it's not good.

                    so as a developer i should comment like this
                    <CodeFrame>
                        {
                            "/*\n" +
                            "checks the given argument matches the given regex, if not throws an error\n" +
                            "@param v - the given arguments and a regex for matching are in it\n" +
                            "*/\n" +
                            "void is_valid(struct validation_t* v) {...}"
                        }
                    </CodeFrame>
                    so now you can find out what is going on.
                </Content>
                <Content textColor={props.revBackgroundColor} title="Final Note">
                    there are many many ways to make your code more readable but i mentioned this,
                    i dont want to make this long in one page.
                    you can search in websites like quora and stackoverflow and much more.
                </Content>
            </div>

        </div>
    )
}
export default Start