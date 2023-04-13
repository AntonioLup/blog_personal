import { useState, useEffect } from "react";

function useFetch(url: any) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log(data);
            try {
                const response = await fetch(url, {method: 'GET'}); // Fetch data from the provided URL
                if (!response.ok) {
                    throw new Error('Error fetching data'); // Throw an error if response is not ok
                }
                const jsonData = await response.json(); // Parse response as JSON
                setData(jsonData); // Set fetched data to state
                setLoading(false); // Set loading state to false
            } catch (err) {
                setError(String(err)); // Set error state with error message
                setLoading(false); // Set loading state to false
            }
        };

        fetchData(); // Call the fetchData function on component mount


        // Clean up effect
        return () => {
            // Cleanup logic here, if needed
        };
    }, [url]); // Only re-run effect if the URL parameter changes

    return { data, loading, error }; // Return fetched data, loading state, and error state
}
  
  export default useFetch;