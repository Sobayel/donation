const Statistics = () => {
    const { data } = useDonationData();
    const { localData } = useLocalStorage();
    const data = [
        { name: 'Your Donation', value: localData.length },
        { name: 'Available Donation', value: data.length - localData},
      ];
    return (
        <div>
            <h2>Statistics</h2>
        </div>
    );
};

export default Statistics;