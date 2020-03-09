const regionMap = new Map([
    ['Hobbiton', 'Eriador'],
    ['Rivendell', 'Eriador'],
    ['Minas Tirith', 'Gondor'],
    ['Lake Town', 'Rhovanion'],
    ['Minas Morgul', 'Mordor'],
]);

function main(params) {

    // Augment the member (record) created in the previous Action
    member = params.member;
    member.region = regionMap.get(member.place) || "unknown";
    member.date = new Date(member.joined).toLocaleDateString();
    member.time = new Date(member.joined).toLocaleTimeString();

    return { member: member };
}
