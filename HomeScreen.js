import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Phần chào mừng và avatar */}
        <View style={styles.header}>
          <View style={styles.headerText}>
            <Text style={styles.greeting}>Hello</Text>
            <Text style={styles.name}>Christie Doe</Text>
          </View>
          <Image
            source={require('./assets/user.jpg')} 
            style={styles.userImage}
          />
        </View>

        {/* Phần Your Insights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Insights</Text>
          <View style={styles.insightGrid}>
            {/* Ô 1: Scan new */}
            <View style={styles.insightItem}>
              <Ionicons name="scan" size={24} color="#4CAF50" />
              <Text style={styles.insightLabel}>Scan new</Text>
              <Text style={styles.insightValue}>Scanned 483</Text>
            </View>

            {/* Ô 2: Counterfeits */}
            <View style={styles.insightItem}>
              <Ionicons name="alert-circle" size={24} color="#FF5252" />
              <Text style={styles.insightLabel}>Counterfeits</Text>
              <Text style={styles.insightValue}>Counterfeited 32</Text>
            </View>

            {/* Ô 3: Success */}
            <View style={styles.insightItem}>
              <Ionicons name="checkmark-circle" size={24} color="#2196F3" />
              <Text style={styles.insightLabel}>Success</Text>
              <Text style={styles.insightValue}>Checkouts 8</Text>
            </View>

            {/* Ô 4: Directory */}
            <View style={styles.insightItem}>
              <Ionicons name="folder" size={24} color="#FFC107" />
              <Text style={styles.insightLabel}>Directory</Text>
              <Text style={styles.insightValue}>History 26</Text>
            </View>
          </View>
        </View>

        {/* Phần Explore More */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore More</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.exploreMoreContainer}>
            <Image source={require('./assets/ExM1.png')} style={styles.exploreItem} />
            <Image source={require('./assets/ExM2.png')} style={styles.exploreItem} />
            <Image source={require('./assets/ExM3.png')} style={styles.exploreItem} />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 35,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 18,
    color: '#666',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  insightGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  insightItem: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  insightLabel: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
  },
  insightValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 4,
  },
  exploreMoreContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  exploreItem: {
    width: 120,
    height: 100,
    borderRadius: 8,
    marginRight: 10,
  },
});

export default HomeScreen;