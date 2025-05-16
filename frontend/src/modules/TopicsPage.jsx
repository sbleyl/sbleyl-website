function TopicsPage() {
    return (
       <>
            <h2>Web Development Topics</h2>
            <nav class="local">
                <a href="#webServers">Web Servers</a>
                <a href="#frontendDesign">Frontend Design</a>
                <a href="#optimizingImages">Optimizing Images</a>
                <a href="#favicons">Favicons</a>
                <a href="#cascading">Cascading Stylesheets</a>
                <a href="#forms">Forms</a>
                <a href="#express">Express</a>
                <a href="#javascript">JavaScript</a>  
            </nav>
            <article id="webServers">
                <h3>Web Servers</h3>
                <p>
                The concept of a designated home page, typically 'index.html' in almost all real-world web applications, refers to the default file served when a request is made to the root URL
                of a web application. Some of the common default names include <strong>'index.html'</strong> (Used by the Apache web server, OSU ENGR), <strong>'default.html'</strong> 
                (Microsoft .NET), and in some cases, <strong>'index.js'</strong> or <strong>'index.php'</strong> may be used as the homepage.
                </p>
                <p>
                In terms of what can be seen from a Web Dev/Inspector Network tab output screen, so far we have learned about the ‘Headers’. In ‘Headers’ we 
                can see the <strong>Request URL, Request Method, Status Code, Type (or content-type), Referrer Policy, Last Modified Time, Remote Address</strong> (though not present in ‘hard-drive 
                version'), and <strong>content-length</strong> just to name a few. As far as differences in the file details when viewed from the web server versus the local 
                computer, the request URL is different and the ENGR web server also displays the Remote Address, and additional information on both the Response (Connection, Content-
                length, access time/date, server, etc.) and Request Headers (Accept, Cache-Control, Connection, Cookie, Host, etc.). Using the GET method, the index page can be provided and is the 
                most common method used to access web pages.
                </p>
                <p>
                Regarding why the favicon.ico file has a status 200 but main.css and main.js have status 404 (on my end on Chrome), we have to first define each status. As 
                mentioned in the explorations, status code <strong>200-299</strong> indicates successful responses, with 200 meaning OK and that the request succeeded and the response body has the needed 
                information. Status code <strong>400-499</strong> indicates client errors, with 404 meaning ‘Not Found’ and that the requested resource is not found on the server. Simply put, the favicon.ico 
                file exists on the server and was successfully retrieved, while main.css and main.js files do not exist at the specified paths on the server.
                </p>
                <p>
                For explaining parts of my web servers' URL, my web server’s URL is <strong>https://web.engr.oregonstate.edu/~bleyls/a1-bleyls/</strong>. ‘https://’ would be the scheme, ‘web.engr.’ 
                would be the subdomain, ‘oregonstate.edu’ would be the host/domain.extension, and ‘/~bleyls/a1-bleyls/’ would be the path to a page. In this particular instance, there 
                wouldn’t be a resource as it isn’t referencing a particular file. There would be an exception if I were selecting ‘main.css’ or ‘main.js’ in the Network tab under names, in which 
                case they would be the resource/item.
                </p>
            </article>
            <article id="frontendDesign">
                <h3>Frontend Design</h3>
                <p>
                    The concept of <strong>frontend design</strong>
                </p>
                <dl>
                    <dt><strong>Effective</strong></dt>
                    <dd>Ensuring users achieve their objectives accurately and get precise results.</dd>
                    <dt><strong>Efficient</strong></dt>
                    <dd>Allowing users to accomplish tasks with minimal effort and steps, resulting in prompt outcomes.</dd>
                    <dt><strong>Easy to navigate</strong></dt>
                    <dd>Making it easy for users to find what they need through clicks or searches. Being able to easily repeat the process in the future.</dd>
                    <dt><strong>Error-free</strong></dt>
                    <dd>Minimize accessibility and availability issues by addressing common user errors and ensuring a seamless experience without mistakes or roadblocks.</dd>
                    <dt><strong>Enjoyable to use</strong> or <strong>Engaging</strong></dt>
                    <dd>Creating a user experience that is both captivating and tailored to the audience's needs, encouraging users to return from the overall positive experience and the previous four elements.</dd>
                </dl>
                <p>
                    As far as the purpose of each <strong>page layout tags</strong>. For header, it denotes the banner or masthead for an app/site and typically includes the name, publisher, and marketing slogan.
                    nav is used for indicating navigation, takes users from the current page to other pages, and can be used multiple times. 
                    main denotes the primary block that holds content and is typically used for stories, galleries, tutorials, etc. 
                    section is used to make a thematic grouping of content and typically groups content that is related but doesn't quite stand on its own. 
                    article denotes a single specific topic with a second-level headline, and is typically used inside section. 
                    And finally footer usually holds legal information, contact information, and links to critical pages. Typically footer is located below the main tag
                </p>
                <ol>
                    <li><strong>Anchor link to external content</strong>: Also known as an <strong>External anchor</strong>. Links to a URL outside of the current website. This uses a href 
                    attribute with a full URL.</li>
                    <li><strong>Anchor link to internal content</strong>: Also known as an <strong>Internal anchor</strong>. Links from one text item to another text item within the same 
                    page, by using IDs.</li>
                    <li><strong>Anchor link from page-to-page</strong>: An extension of an <strong>Internal anchor</strong>. It's a visualization of changing pages using the navigation bar.</li>
                </ol>
            </article>
            <article id="optimizingImages">
                <h3>Optimizing Images</h3>
                <p>
                    There are 6 major image optimizing specifications. Optimized images should meet these specifications.
                </p>
                <dl>
                    <dt><strong>Descriptive file name</strong></dt>
                    <dd>To improve search engine optimization, file names should be descriptive and concise. If possible, try to include information such as who, what, when, and where.</dd>
                    <dt><strong>Small file size</strong></dt>
                    <dd>
                        A smaller file size typically equates to faster loading times. Reduce file sizes to as small as possible. Remember that Lossy compression uses approximations to 
                        discard some image data, while lossless compression does not degrade the visual quality.
                    </dd>
                    <dt><strong>Exact dimensions</strong></dt>
                    <dd>Ensure that your images fit in the space of your webpage. Crop and reduce the size as needed.</dd>
                    <dt><strong>Correct file format</strong></dt>
                    <dd>Use the correct file-format depending on what is optimal for your image.</dd>
                    <dt><strong>Reduced resolution</strong></dt>
                    <dd>
                        Monitors typically have a resolution ranging from 32 to over 300 pixels per inch (PPI), with 72PPI being the traditional standard. With the advancement of higher 
                        resolution in the modern world, it is becoming increasingly common to supply various image sizes to accommodate.
                    </dd>
                    <dt><strong>Color Mode</strong></dt>
                    <dd>Images should meet the appropriate color settings for optimal display. Use RGB for .PNG, .JPG, .SVG, and .WebP. Indexed for .GIF (and occasionally .PNG)</dd>
                </dl>
                <p>
                    For file formats that are appropriate for photos and line-art, typically we see .JPG and WebP used for photos, and GIF, .PNG, and .SVG for line art.
                    Photo file formats like .JPG and WebP provide great compression and a good balance between quality and file size.
                    Line art file formats like .GIF, .PNG, and .SVG display edges and sharp details clearly, with .PNG and .SVG providing superior transparency and scalability respectively.
                </p>
            </article>
            <article id="favicons">
                <h3>Favicons</h3>
                <p>
                    <strong>Favicons</strong> are small icons used to quickly identify a site in the browsers tab, on a smartwatch, a cellphone, a large display, or a search engine results lists.
                    Typically they would be a website, app, or company logo. As different devices and browsers use favicons in various ways, favicon will be formatted differently based on the 
                    device and browser you are accessing from. Providing multiple favicon sizes ensures compatibility across different platforms and display resolutions.
                    The creation process involves designing an icon that is adaptable to various devices, Favicons can be saved in .GIF, .PNG, .ICO, and .SVG file formats. Different file formats are suitable
                     for different browsers and devices. When a user requests, the browser retrieves these files and saves the icon and its associated link to a bookmark or favorites list, as well 
                    as on the device’s screen or within search engine results. Frontend designers often create multiple versions of a favicon to ensure optimal display in different contexts.
                </p>
            </article>
            <article id="cascading">
                <h3>Cascading Stylesheets</h3>
                <p>
                    <strong>CSS</strong> is used to style or redefine the appearance and behavior of HTML elements. It is used to improve usability, readability, legibility, and adhere to 
                    brand requirements. <strong>CSS</strong> can overide default HTML elements that are predefined with style.
                </p>
                <p>
                    There are 5 ways to incorporate styles: <strong>external stylesheets, imported stylesheets, embedded styles, inline styles,</strong> and <strong>regular JavaScript 
                    manipulation through the Document Object Model (DOM)</strong>. Though externally linked .CSS files are usually the preferred and most efficient method for apps and 
                    websites, each method serves a specific purpose and is chosen based on project needs for performance and maintainability. Overall, <strong>external stylesheets</strong> 
                    are great for adding a little 'spice' and makes it easy to update across your entire website. <strong>Imported stylesheets</strong> help you break things down in 
                    big projects, while <strong>embedded and inline styles</strong> are handy for quick tweaks on specific pages. Using <strong>JavaScript manipulation through DOM</strong> 
                    lets you change styles on the fly, so your site can react to what users do.
                </p>
            </article>
            <article id="forms">
                <h3>Form usability, elements and attributes, best practices, and accessibility</h3>
                <p>
                    There are 6 major goals of accessible forms. First, use <strong>clear instructions</strong> in labels so users know what to do. Second, explain <strong>why you're 
                    collecting data</strong> and <strong>which fields are required</strong>. Third, <strong>set the first field to autofocus</strong> so users can start typing right away without clicking around. Fourth, 
                    make sure all <strong>form controls can be used with a keyboard</strong> for those who cannot or prefer not to use a mouse. Fifth, <strong>implement tab indexing</strong> in complex forms to 
                    guide users through the fields in the right order. Lastly, <strong>ensure validation messages are screen-readable</strong>, as the default browser messages often aren't, so 
                    everyone, including those using screen readers, gets the feedback they need.
                </p>
                <p>
                    The major form tags essential for creating forms in HTML documents include the <strong>form tag</strong>, which has key attributes like <strong>action</strong> (specifying the 
                    URL to send form data) and <strong>method</strong> (defining the HTTP method). Tags such as <strong>fieldset</strong> and <strong>legend</strong> are used to group related form controls, it helps with accessibility 
                    by providing a clear structure and captions for each group. The <strong>label</strong> tag, paired with controls, helps users understand the purpose of each input, especially 
                    helping those using screen readers. The select with <strong>option</strong> elements are used to create dropdown menus, allowing users to select from predefined choices. The 
                    <strong>textarea</strong> element allows for multi-line text input, useful for longer responses or messages. Lastly, the <strong>button</strong> element is used to trigger form submission or 
                    other actions specified in the form's action attribute. Each of these tags and attributes is necessary to create structured, functional, and accessible forms.
                </p>
                <p>
                    Some of the major form style recommendations that would improve usability would be to <strong>style elements</strong> like fieldsets, legends, labels, and inputs 
                    for better readability and interaction. Changing <strong>fieldset borders</strong>, adjusting legend fonts, and placing labels above form controls make things clearer. <strong>Increasing 
                    font size</strong> and <strong>padding</strong> for inputs, buttons, textareas, and selects makes them easier to use. Using <strong>focus and validation</strong> styles, like changing backgrounds and 
                    color, helps users see changes easier. <strong>Styling required</strong> fields, autofocus, placeholders, checkboxes, radio buttons, and disabled inputs helps users navigate and improves accessibility.
                </p>
            </article>
            <article id="express">
                <h3>Node, npm, and Express</h3>
                <p>
                    There are three technologies that are commonly used to improve the web development experience; <strong>Node, npm, and Express</strong>. <strong>Node.js</strong> is a open source, cross-platform 
                    runtime environment that helps you build server-side and networking applications in JavaScript. It makes it easier with its extensive library of modules. <strong>npm</strong>, 
                    which comes with Node, is a package manager that helps you install and manage modules quickly. <strong>Express</strong> is a popular framework for Node that makes building web 
                    applications smoother by providing useful tools for handling routes, HTTP requests, and static files. Using Node.js, npm, and Express together streamlines the 
                    development process, making the process a lot more efficient with less head-ache.
                </p>
            </article>
            <article id="javascript">
                <h3>JavaScript</h3>
                <p>
                    There are 6 main data types in JavaScript that we have learned in this class: <strong>Number, Boolean value, string, symbol, special values</strong>, and <strong>object</strong>.
                    The <strong>number</strong> type includes both integers and floating-point numbers, and arithmetic operations. <strong>Boolean values</strong> are true or false, and used for logical operations. 
                    <strong>Strings</strong> represent text and are used for handling text data. <strong>Symbols</strong> are unique and can’t be changed, and they are often used as 
                    keys in objects to keep things organized. <strong>Special</strong> values include undefined and null, for uninitialized and absent variables. 
                    <strong>Objects</strong> can point to data of any data type, or containers that can store related data and functions together using key-value pairs.
                </p>
                <p>
                    <strong>Object, arrays,</strong> and <strong>JSON</strong> are components in JavaScript for handling and sharing data. <strong>Objects</strong> let you group 
                    data and functions together, and let you create, update, read, and delete properties. <strong>Arrays</strong> are used to store lists of values, and you can access these values 
                    by using their numerical index. They are especially useful for adding, removing, and checking items. <strong>JSON</strong> is a format used for exchanging data between different 
                    systems. The main purpose of JSON is to provide a universal way to represent data as a string, making it easy to share information between systems and languages. 
                    You can convert a JavaScript object to a JSON string and vice-versa, which makes sending data easy between different systems.
                </p>
                <p>
                    In JavaScript, 'if' and 'switch' statements are the supported conditionals. <strong>Conditionals</strong> allow you to make decisions based on whether conditions are true or false. 
                    'if' statements are typically used when you need to check different conditions, and 'switch' statements are used for when you have a single variable with many 
                    possible values. For <strong>loops</strong>, you would use them to repeat code based on certain conditions. 'while' loops are good for running code while a 
                    condition is true, 'do while' ensures the code runs at least once before checking the condition, 'for' loops allow you to loop a specific number of times over a range, 
                    and 'for of' loops help iterate over items in an array.
                </p>
                <p>
                    <strong>Object-Oriented Programming</strong> is about objects, which all have their own unique identity, state, and behavior. You can create objects using name-value 
                    pairs and easily add, change, or remove their properties. Prototypes let you share common features among objects and allow you to create many objects with the same common property.
                </p>
                <p>
                    The most important aspect of <strong>Functional programming</strong> is treating functions as first-class values. This means that you can assign functions to variables, 
                    pass them around as arguments, and have them return other functions. It also involves higher-order functions, where a function takes another function as an argument. 
                    You can also set default values for function parameters as well, which is great for simplifying function calls.
                </p>
            </article>
       </>
    );
}
export default TopicsPage;