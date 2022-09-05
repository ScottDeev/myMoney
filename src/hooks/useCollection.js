import { useEffect, useRef, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, _query, _orderBy) => {
	const [documents, setDocuments] = useState(null)
	const [error, setError] = useState(null)

	// if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
	const query = useRef(_query).current
	const orderBy = useRef(_orderBy).current

	useEffect(() => {
			let ref = projectFirestore.collection(collection)

			if(query){
				ref = ref.where(...query)
			}
			if(orderBy){
				ref = ref.orderBy(...orderBy)
			}

			const unsub = ref.onSnapshot((snapshot) => {
				let resultts = []
				snapshot.docs.forEach(doc => {
					resultts.push({...doc.data(), id: doc.id})
				})

				// update state
				setDocuments(resultts)
				setError(null)
			}, (error) => {
				console.log(error)
				setError('Could not fetch the date')
			})

			// unsubscribe on unmount
			return () => unsub()
	}, [collection, query, orderBy])

	return {documents, error}
}