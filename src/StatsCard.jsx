export default function StatsCard () {
    const statsData = [
      { type: "Users", value: "200" },
      { type: "Revenue", value: "4500$" },
    ];
  
    return (
      <div className="StatsCard">
        {statsData.map((res, index) => (
          <div key={index} className={res.type}>
            <div className="statsBlock">{res.type}</div>
            <div className="statsBlock">{res.value}</div>
          </div>
        ))}
      </div>
    );
};
  