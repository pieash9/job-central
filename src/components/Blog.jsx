import React from "react";

const Blog = () => {
  return (
    <div className="my-container mt-10">
      <h3 className="text-3xl font-bold text-gray-600 mb-3">#Blog</h3>
      <div className="text-justify border border-gray-300 rounded-lg p-4 mb-5">
        <h4 className="text-2xl font-semibold text-gray-700">
          1. When should you use context API?
        </h4>
        <p className="text-gray-500 text-lg mt-2">
          When information or functionality needs to be passed through the
          component tree without passing through any intermediate components,
          context API should be used. This can be helpful for controlling the
          overall state, theme details, or any other data or functionality that
          needs to be shared over numerous application components. We may
          prevent prop drilling and keep our code more scalable and
          maintainable by using the Context API.
        </p>
      </div>
      <div className="text-justify border border-gray-300 rounded-lg p-4 mb-5">
        <h4 className="text-2xl font-semibold text-gray-700">
          2. What is a custom hook?
        </h4>
        <p className="text-gray-500 text-lg mt-2">
          React's custom hook function enables the reuse of stateful code across
          numerous components. It is a technique for removing intricate logic
          and producing reusable, assemble able code. Similar to regular
          functions, custom hooks can be exchanged between components by
          utilizing pre-existing hooks like useState and useEffect.
        </p>
      </div>
      <div className="text-justify border border-gray-300 rounded-lg p-4 mb-5">
        <h4 className="text-2xl font-semibold text-gray-700">
          3. What is useRef?
        </h4>
        <p className="text-gray-500 text-lg mt-2">
          React's useRef hook produces a mutable object with a current
          attribute. It can be utilized to store a DOM element reference or to
          maintain any modified value across renders without requiring a
          re-render. Since it can store a reference to a particular node that
          endures between renderings, useRef is particularly helpful for gaining
          access to or altering DOM nodes. The component is not re-rendered when
          the current attribute of a useRef object is changed, unlike useState.
          Instead of altering the component's state or invoking any lifecycle
          methods, the value can be immediately modified and accessed.
        </p>
      </div>
      <div className="text-justify border border-gray-300 rounded-lg p-4 mb-5">
        <h4 className="text-2xl font-semibold text-gray-700">
          4. What is useMemo?
        </h4>
        <p className="text-gray-500 text-lg mt-2">
        React has a hook called useMemo that caches function results so they don't have to be recalculated with each render. The function is only recomputed when one of the dependencies changes, and it takes a function and an array of dependencies as inputs. This can be used to reduce the need for extra renderings and improve the speed of computationally demanding tasks.
        </p>
      </div>
    </div>
  );
};

export default Blog;
