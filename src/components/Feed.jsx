import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import { client } from '../client'
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { searchQuery, feedQuery} from '../utils/data'

const Feeds = () => {
  const [loading, setLoading] = useState(false);
  const [pins, setPins] = useState(null)

  const {categoryId} = useParams();

  useEffect(() => {

    setLoading(true);
      if(categoryId) {
        const query = searchQuery(categoryId)

        client.fetch(query).then((data) => {
          console.log(data)
          setPins(data)
          setLoading(false);
        })
      }else {
       client.fetch(feedQuery).then((data) => {
         console.log(data)
        setPins(data);
        setLoading(false);
      });
            }
  
 
  }, [categoryId])
  

  if(loading) return <Spinner message="Loading..."/>

  if (!pins?.length) return <h2>No pins available</h2>
    
  

  return (
    <div>
        {pins && (<MasonryLayout pins={pins}/>)}
    </div>
  )
}

export default Feeds