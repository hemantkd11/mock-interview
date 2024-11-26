import react from "react";

const TheoryPage = () => {
  return (
    <div className="theory-page-container">
      <div>
        <div>
          <h2>what is Data structure</h2>
          <p>
            1. A data structure is a storage that is use to store and organize
            data. It is a way of arranging data on a cumputer so that it can be
            accessed and updated efficiently.
            <br />
            2. Its an integral part of computers used for the arrangement of
            data in memory. They are essential and responsible for organizing,
            processing, accessing, and storing data efficiently.
          </p>
          <h2>
            We already have learned about data structure. Many times, what
            happens is that
          </h2>
          <p>
            <b>Data type : -</b> the data type is a form of variable to which a values
            can be assigned. It defines that the particular variable will assign
            the value of given data type only. Can hold values only. No time
            complexity
          </p>
          <p>
            <b>Data structure : -</b> Its a collection if different kinds of data. That
            entire data can be represent using an object and can be used
            throughout the program. Can hold different type of data in
            object.Time complexity play important role in this
          </p>
          <h2>Classification of Data Structure: </h2>
          <p>Data structure has many different uses in our daily life. There are many different data structure that are used to solve different mathematical and logical problems.Data structure make easy to organize and process data in large amount.</p>
          <p>Data classification are like</p>
          <p><pre>{`Data Structure --- 
             1. Linear Data Structure --  
                        Static Data Structure ---
                            -- Array
                         Dynamic Data Structure ---
                            -- Queue
                            -- stack
                            -- linked list
             2.  Non - Linear Data Structure --- 
                    -- Tree
                    -- Graph`}
          </pre>
          </p>
          <p> <b>Linear Data Structure :  --</b> <br />
            Data structure  in which data elements are arranged sequentially or linarly, where each element is attached to its previous and next adjacent elements, is called linaer data structure.
            <p><b>--- Static data structure:</b> static data structure has a fixed memory size. it is easier to access the elements in a static data structure.</p>
            <p><b>--- Array : - </b> <br />

              An array is a linear data structure and it is a  collection of items stored at contiguous memory location. it use to store multiple items of the same type together in one place. <br />

              <b>Characteristics of array</b><br />
              a.  use index-based data structure which helps to identify each of the element in an array easily using the index<br />
              b.  it can also use to store data in 2d array <br />
              c.  Array also use to implement other data sturcture like stacks, queues, heaps, hash tables, etc <br />
              <b> Applications of array (use of array)</b>
            </p>
            <p><b>--- Dynamic data structure :  -- </b>The size is not fixed and it can be updated during the runtime which may be  considered efficient concerning the memory</p>
          </p>

          <h2>What is Linked list?</h2>
          <p>A linked list is a linear data stucture inn which element are not stored at contiguous memory locations.They linked by using pointer</p>
          <p>Types of linked lists :</p>
          <ul>
            <li>Single-linked list</li>
            <li>Double linked list</li>
            <li>circular linked list</li>
            <li>Double circular linked list</li>
          </ul>

          <h2>Time Complexity</h2>
          <p>Time taken by the code to execute</p>
        </div>
      </div>
    </div >
  );
};
export default TheoryPage;
